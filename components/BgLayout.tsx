


export default function BgLayout ({
	children
}) {


	return <div className="layout-container">
		<div className="layout-bg">bg</div>
		<div className="layout-content">{children}</div>
	</div>;
}