import React from "react";
import PropType from "prop-types";
import 'antd/dist/antd.css';
import Head from "next/head";

const App = ({Component}) => {
	return (
		<>
			<Head>
				<meta charSet="utf-8"/>
				<title>
					프로토스
				</title>
			</Head>
			<Component/>
		</>
	);
}
App.propType = {
	Component: PropType.elementType.isRequired,
}

export default App;

