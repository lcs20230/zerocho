import React, {useState} from "react";
import PropType from "prop-types";
import {Input, Menu, Row, Col} from "antd";
import Link from "next/link"
import styled from "styled-components";


const SearchInput = styled(Input.Search)`
	vertical-align: middle;
`;

const App = ({children}) => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	return (
		<div>
			<div>
				<Menu mode="horizontal">
					<Menu.Item>
						<Link href="/"><a>노드버드</a></Link>
					</Menu.Item>
					<Menu.Item>
						<Link href="/profile"><a>프로파일</a></Link>
					</Menu.Item>
					<Menu.Item>
						<SearchInput enterButton />
					</Menu.Item>
					<Menu.Item>
						<Link href="/singup"><a>회원가입</a></Link>
					</Menu.Item>
				</Menu>
				<Row gutter={8}>
					<Col mx={24} md={6}>
						{isLoggedIn ? <UserProfile/> : <LoginForm />}
					</Col>
					<Col mx={24} md={12}>


					</Col>
				</Row>
			</div>
			{children}
		</div>
	);
}


App.propTypes = {
	children: PropType.node.isRequired,
}

export default App;
