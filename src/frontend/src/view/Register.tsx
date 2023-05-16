import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import FormRow, {FormRow2} from "../component/LogRegForm/FormRow";
import {toast} from "react-toastify";
import "../css/login.css";
// import * as userService from "../services/userService";
// import { UserRole, defaultUser } from "../Data/User";

const defaultUserForm = {
    username: "",
    role: 0,
    avatar: "",
    notes: "",
    password: "",
    password_confirm: "",
    phone: "",
    token_input: "",
}

function RegisterView() {
    const [values, setValues] = useState(defaultUserForm);

    const [token, setToken] = useState("");

    function handleChange(e: { target: { name: any; value: any; }; }) {
        const {name, value} = e.target;
        setValues({
            ...values,
            [name]: value,
        });
    }

    function getToken() {
        //generate token & send to phone number(set token here)
    }

    const navigate = useNavigate();


    // const callback = (data) => {
    //     if(data.status >= 0){
    //         toast.success("Register success\n Login now");
    //         navigate("/Login");
    //     }
    //     else{
    //         toast.error("Register failed");
    //     }
    // }
    function onSubmit(e: { preventDefault: () => void; }) {
        e.preventDefault();
        const {username, password, password_confirm, phone, token_input} = values;
        if (!password || !username || !password_confirm || !phone || !token_input) {
            toast.error("Please fill out all fields");
            return;
        }
        if (password !== password_confirm) {
            toast.error("Password not match");
            return;
        }
        if (token != token_input) {
            toast.error("Token not match");
            return;
        }
        // userService.register(values, callback);
    }

    return (
        <div className="LoginView">
            <form className="form" onSubmit={onSubmit}>
                {/* Logo */}
                <h3 className="login-title">
                    注册
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
                {/* password confirm */}
                <FormRow
                    type="password_confirm"
                    name="确认密码"
                    value={values.password_confirm}
                    handleChange={handleChange}
                />
                {/* phone number */}
                <FormRow2
                    type="phone"
                    name="手机号"
                    value={values.phone}
                    handleChange={handleChange}
                    handleSubmit={getToken}
                />
                {/* token */}
                <FormRow
                    type="token_input"
                    name="验证码"
                    value={values.token_input}
                    handleChange={handleChange}
                />
                {/* button */}
                <button type="submit" className="login-btn btn">
                    提交
                </button>
                <p className="login-text">
                    已经拥有账号?
                    <button type="button" onClick={() => {
                        setValues(defaultUserForm);
                        navigate("/Login");
                    }} className="member-btn">
                        点此登录
                    </button>
                </p>
            </form>
        </div>
    );
}

export default RegisterView;
