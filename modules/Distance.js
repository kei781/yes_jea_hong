export default ({ width, height, hidden }) => <>
	<div />
	<style jsx>{`
		div{
			flex-shrink: 0;
			width: ${width || 0}px;
			height: ${height || 0}px;
			display: ${hidden ? 'none' : 'block'};
		}
	`}</style>
</>
