const newCommentHandler = async function(event) {
    event.preventDefault();
  
    const comment = document.querySelector('#new-comment-content').value;

  
    await fetch(`/api/comment`, {
      method: 'POST',
      body: JSON.stringify({
        comment,
      }),
      headers: { 'Content-Type': 'application/json' },
    });
  
    document.location.reload;
  };
  
  document
    .querySelector('#new-comment')
    .addEventListener('comment-btn', newCommentHandler);
  