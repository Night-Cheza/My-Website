import {useEffect, useState} from "react";

export default function Section ( {title, description, image, ...props} ) {
	const [ display, setDisplay ] = useState( false );

	useEffect( () => {
		if( title === 'Home' )
		{
			setDisplay( true );
		}
	}, [title] )

	return (
		<>
			<h3>{title}</h3>
			<div {...props}>
				<p>{description}</p>
				{display ? <img alt='' src={image}/> : <div></div>}
			</div>
		</>
	);
}
