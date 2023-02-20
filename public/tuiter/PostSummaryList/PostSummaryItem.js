const postSummaryItem = (post) => {
    return(`
        <li class="list-group-item">
            <div class="row">
                <div class="col-9 col-lg-10 wd-post-left">
                    <div class="text-secondary">${post.topic}</div>
                    <div>
                        <span class="fw-bolder">${post.userName}</span>
                        <span><i class="fas fa-check-circle"></i></span>
                        <span class="text-secondary">- ${post.time}</span>
                    </div>
                    <div class="fw-bolder">
                        ${post.title}
                    </div>
                    <div class="text-secondary">${post.tweets ? post.tweets + ' Tweets' : ''}</div>
                </div>
                <div class="col-3 col-lg-2 wd-post-right">
                    <img src="${post.image}" class="rounded-3 float-end wd-post-summary-image" width="100px" alt="React.js">
                </div>
            </div>
        </li>
    `)
}

export default postSummaryItem;