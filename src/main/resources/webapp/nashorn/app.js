/** @jsx React.DOM */

var TitleView = React.createClass({displayName: "TitleView",
	render: function() {
		return React.createElement("h1", null, this.props.text);
	}
});

var renderTitle = function (text) {
    return React.renderToString(
        React.createElement(TitleView, {text: text})
    );
};
