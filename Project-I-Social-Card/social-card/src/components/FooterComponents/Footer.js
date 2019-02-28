import React from 'react';

import './Footer.css';

function Footer() {
    return (
        <div className="footer">
            <i className="far fa-comment" onClick={commentClick}></i>
            <i className="fas fa-sync"> 6</i>
            <i className="far fa-heart" onClick={heartClick}> 4</i>
            <a href="mailto: lambda@lambdaschool.com?Subject=Hello%20again" target="_top"><i className="far fa-envelope"></i></a>
        </div>
    );
}
function heartClick() {
    let heart = document.querySelector('.fa-heart');
    heart.style.color = 'red';
}
function commentClick() {
    let comment = document.querySelector('.fa-comment');
    comment = document.createElement('textarea');
    comment.setAttribute('style', {width: '150px', height: '85px'});
    return comment;
}

export default Footer; 