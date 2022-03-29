import {Input , Form , Button} from "antd";

export const email = (setModel) => (
) =>
(
	<Form.Item
		label="Email"
		name="email"
		rules={[
			{
				type:"email",
				message:"Please provide a valid email"
			},
			{
				required:true,
				message:"Email is required"
			}
			]}
	>
		<Input type = "email" onChange = {setModel("email")} />
	</Form.Item>
);

export const password = (setModel) =>
(
	<Form.Item
		label = "Password"
		name = "password"
		rules = {[
			{
				required:true,
				mesage:"Please Enter a password"
			},
			() => ({
				validator(rule , value){

				if(value.length > 7){
					return Promise.resolve();
				}
				return Promise.reject("Password must be atleast 8 characters long")
				},
			}),
		
		]}
	>
		<Input type = "password" onChange = {setModel("password")} />
	</Form.Item>
);

export const confirmPwd = (setModel) => (
	<Form.Item
		label = "Confirm Password"
		name = "confirm-password"
		rules = {[
			{
				required:true,
				message:"Please provide your password"
			},
			({ getFieldValue }) =>({
				validator(rule ,value)
                {
					if(!value || getFieldValue("password" ===value)){
						return Promise.resolve()
					}
					return Promise.reject("Passwords must much")
                },
				required:true,
				message:"Please provide your password"
			}),
		]}
	>
		<Input type = "password" onChange = {setModel("ConfirmPwd")} />
	</Form.Item>
	
);

 
export const forgotPwd = (setActiveKey) =>
(
	<p
		className="forgot-pwd"
		onClick = {() => setActiveKey("3")}
	>
		Forgot your Password
	</p>
);

export const submit = (activeKey , onSubmit)  =>(
	<Button type="flashy" htmlType = "submit" onClick = {onSubmit}>
		{
			activeKey==="1" ? "Login":activeKey==="2" ? "Sign Up":"Request Password Reset"
		}
	</Button>
);

export default[email,password , confirmPwd , forgotPwd ,submit]
















