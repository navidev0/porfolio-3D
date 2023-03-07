import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";

const Section = styled.div`
	height: 100vh;
	scroll-snap-align: center;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	@media only screen and (max-width: 768px) {
		height: 200vh;
	}
`;

const Container = styled.div`
	height: 100%;
	scroll-snap-align: center;
	width: 1400px;
	display: flex;
	justify-content: space-between;
	@media only screen and (max-width: 768px) {
		width: 100%;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
`;

const Hero = () => {
	return (
		<Section>
			<Navbar />
			<Container>Hero</Container>
		</Section>
	);
};

export default Hero;
