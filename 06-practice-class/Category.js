class Category extends React.Component {
	constructor() {
		super()
	}

	render() {
		return (
			<ul>
				<li className="cat-link left valign-wrapper">
					<i className="material-icons">{this.props.data.icon}</i>
					{this.props.data.name}
				</li>
			</ul>
		)
	}
}
