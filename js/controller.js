class Controller {
	constructor() {
		this.model = new Model({
			onPostsChanged: this.handleModelPostsChanged,
		});
		this.view = new View({
			onNewPost: this.handleViewPost,
		});
	}

	handleModelPostsChanged = (posts, isError) => {
		this.view.render(posts, isError);
	};

	handleViewPost = (title, desc) => {
		this.model.addPost(title, desc);
	};
}
