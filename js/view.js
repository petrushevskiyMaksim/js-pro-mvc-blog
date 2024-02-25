class View {
	constructor({ onNewPost }) {
		this.listPostsNode = document.getElementById('posts');
		this.titleInputNode = document.getElementById('titleInput');
		this.textInputNode = document.getElementById('textInput');
		this.btnNode = document.getElementById('addPostBtn');
		this.titleErrorNode = document.getElementById('titleError');
		this.textErrorNode = document.getElementById('textError');

		this.onNewPost = onNewPost;

		this.btnNode.addEventListener('click', this._handleBtnClick);
	}

	render(posts, isError) {
		this.listPostsNode.innerHTML = '';
		this.titleErrorNode.innerText = '';
		this.textErrorNode.innerText = '';

		if (isError) {
			this.titleErrorNode.innerText = 'Максимальное кол-во символов 100';
			this.textErrorNode.innerText = 'Максимальное кол-во символов 200';
		}

		posts.forEach(post => {
			this.listPostsNode.innerHTML += `
				<div>
					<p>${this._buildDateString(post.timestamp)}</p>
					<p>${post.title}</p>
					<p>${post.desc}</p>
				</div>
			`;
		});
	}

	_handleBtnClick = () => {
		const title = this.titleInputNode.value;
		const desc = this.textInputNode.value;

		this.onNewPost(title, desc);
	};

	_buildDateString(timestamp) {
		const date = new Date(timestamp);

		return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} 
		${date.getHours()}:${date.getMinutes()}`;
	}
}

