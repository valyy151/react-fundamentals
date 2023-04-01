export const Greet = (props) => {
	return (
		<div>
			<h1>
				Hello {props.name} from {props.country}
			</h1>
			{props.children}
		</div>
	);
};
