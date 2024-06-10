import './App.css';
import Button from './components/Button';
import Header from './components/Header';

function App() {
	return (
		<>
			<Header className="header" />
			<div id='links'>
				<Button>About me</Button>
				<Button>My vision</Button>
				<Button>My learns</Button>
				<Button>Home</Button>
			</div>

		</>
	);
}

export default App;
