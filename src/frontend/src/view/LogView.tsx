import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import FormRow from "../component/LogRegForm/FormRow";
import {toast} from "react-toastify";
import "../css/login.css";
// import * as userService from "../services/userService";

const initialState = {
    username: "",
    email: "",
    password: "",
    isMember: true,
};


function LogView() {
    const [values, setValues] = useState(initialState);

    function handleChange(e: { target: { name: any; value: any; }; }) {
        const {name, value} = e.target;
        setValues({
            ...values,
            [name]: value,
        });
    }

    function handleLog() {
        //TODO:验证登录
        navigate("/ticketBooking/");
    }

    const navigate = useNavigate();

    function onSubmit(e: { preventDefault: () => void; }) {
        e.preventDefault();
        const {username, password, isMember} = values;
        if (!password || (!isMember && !username)) {
            toast.error("Please fill out all fields");
            return;
        } else {
            toast.success("login success");
            navigate("/");
        }

        // const callback = (data: { status: number; data: any; msg: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | ((props: ToastContentProps<unknown>) => React.ReactNode) | null | undefined; }) => {
        //     if(data.status >= 0){
        //         localStorage.setItem("user", JSON.stringify(data.data));
        //         toast.success("login success");
        //         navigate("/");
        //         const encryptedUser = btoa(JSON.stringify(data.data));
        //         document.cookie = `user=${encryptedUser}; expires=0; path=/; SameSite=Strict; Secure`;
        //     }else{
        //         toast.error(data.msg);
        //     }
        // }
        //
        // userService.login({username, password}, callback);
    }

    return (
        <div className="LoginView">
            <form className="form" onSubmit={onSubmit}>
                {/* Logo */}
                <h3 className="login-title">
                    登录
                </h3>
                {/* name */}
                <FormRow
                    type="text"
                    name="用户名"
                    value={values.username}
                    handleChange={handleChange}
                />
                {/* password */}
                <FormRow
                    type="password"
                    name="密码"
                    value={values.password}
                    handleChange={handleChange}
                />
                {/* button */}
                <button type="submit" className="login-btn btn" onClick={() => handleLog()}>
                    登录
                </button>
                <p className="login-text">
                    还不是用户?
                    <button type="button" onClick={() => {
                        setValues(initialState);
                        navigate("/Register");
                    }} className="member-btn">
                        注册
                    </button>
                </p>
            </form>
        </div>
    );
}

export default LogView;