class Model {
	constructor({ onPostsChanged }) {
		this.posts = [];
		this.isError = false;
		this.onPostsChanged = onPostsChanged;
	}

	addPost(title, desc) {
		if (this._isPostTitleValid(title, desc)) {
			this.isError = false;

			this.posts.push({
				title,
				desc,
				timestamp: Date.now(),
			});
		} else {
			this.isError = true;
		}

		this.onPostsChanged(this.posts, this.isError);
	}

	getPosts() {
		return this.posts;
	}

	_isPostTitleValid(title, desc) {
		return title.length <= 2 && desc.length <= 3;
	}
}
