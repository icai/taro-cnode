import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { authCheckState } from "@/reducers/auth";
import Taro, { useRouter } from "@tarojs/taro";

function withUser(WrappedComponent, allowNologin = false) {
  function WithUserHOC(props) {
    const userInfo = useSelector((state: any) => state.auth.user);
    const dispatch = useDispatch();
    const router = useRouter();

    useEffect(() => {
      dispatch(authCheckState());
    }, [dispatch]);

    const isSuperRender = () => {
      return allowNologin || (userInfo && userInfo.userId);
    };

    const perform = () => {
      if (!isSuperRender()) {
        return Taro.redirectTo({ url: "/pages/login/index" });
      }
    };

    useEffect(() => {
      perform();
    }, [userInfo.userId, router.path]);

    if (isSuperRender()) {
      return <WrappedComponent {...props} />;
    } else {
      return null;
    }
  }

  return WithUserHOC;
}

export default withUser;



