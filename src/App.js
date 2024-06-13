import { useState, useEffect } from 'react';
import './App.css';
import Button from './components/Button';
import Header from './components/Header';
import Section from './components/Section';
import {section_info} from './components/section_info';

function App () {
	const [selectedSection, setselectedSection] = useState( 'home' );
	const [ isHidden, setIsHidden ] = useState( false );

	function clickHandler (selectedButton) {
		setselectedSection( selectedButton );
	}

	useEffect(() => {
		if( selectedSection !== 'home' ) {
			setIsHidden( true );
		} else
		{
			setIsHidden( false )
		}
	}, [selectedSection])

	return (
		<>
			{!isHidden ? <Header /> : <div></div>}
			<div id='links'>
				<Button onClick={() => clickHandler('about')}>About Me</Button>
				<Button onClick={() => clickHandler('vision')}>My Vision</Button>
				<Button onClick={() => clickHandler('learns')}>My Learns</Button>
				<Button onClick={() => clickHandler('home')}>Home</Button>
			</div>
			<section>{section_info.map( ( data, _key ) => (
				selectedSection === data.id ?
					<Section key={data.id} title={data.title} description={data.description} image={data.image} id={data.id}/>
					: undefined
			) )}
			</section>
		</>
	);
}

export default App;
