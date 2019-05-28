import React from "react";
import { Scene, Router, Actions } from "react-native-router-flux";
import LoginForm from "./components/LoginForm";
import EmployeeList from "./components/EmployeeList";
import EmployeeCreate from "./components/EmployeeCreate";
import EmployeeEdit from "./components/EmployeeEdit";

const RouterComponent = () => {
	return (
		<Router>
			<Scene key="root" hideNavBar>
				<Scene key="auth">
					<Scene
						key="login"
						component={LoginForm}
						title="Please Login"
						titleStyle={{ textAlign: "center", flex: 1 }}
					/>
				</Scene>

				<Scene key="main">
					<Scene
						rightTitle="Add"
						onRight={() => {
							Actions.employeeCreate();
						}}
						key="employeeList"
						component={EmployeeList}
						title="Employees"
						inital
						// titleStyle={{ textAlign: "center", flex: 1 }}
					/>
					<Scene
						key="employeeCreate"
						component={EmployeeCreate}
						title="Create Employee"
						// titleStyle={{ textAlign: "center", flex: 1 }}
					/>
					<Scene
						key="employeeEdit"
						component={EmployeeEdit}
						title="Edit Employee"
						// titleStyle={{ textAlign: "center", flex: 1 }}
					/>
				</Scene>
			</Scene>
		</Router>
	);
};

export default RouterComponent;
