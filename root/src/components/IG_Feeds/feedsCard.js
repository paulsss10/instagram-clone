import React, {useState} from 'react';
import thumbnail from '../../rsrcs/thumbnail-story.jpg';
import postImage from '../../rsrcs/postImage-dummy.jpg';

const FeedsCard = () => {
    const [feedContent, setFeedContent] = useState([
        {
            userHandle: 'User Handle',
            userProfile: thumbnail,
            postImage: postImage,
            postText: 'Post Text #postText.',
            like: 16,
            comments: [
                {
                    commenterHandle: 'Commenter 1',
                    comment: 'Hey this is a comment!',
                    like: 2
                },
                {
                    commenterHandle: 'Commenter 2',
                    comment: 'Hey this is a comment!',
                    like: 1
                },
            ]
        },
    ])

    return (
      <>
        {feedContent.map((feed) => (
          <div className="feeds__card">
            <div className="feeds__userInfo">
              <div className="userProfile__container">
                <div className="postCard__header">
                  <img
                    alt="user"
                    className="userProfile"
                    src={feed.userProfile}
                  />

                  <div className="userDetails__container">
                    <h3>jordi_alba18</h3>
                    <small>blablabla</small>
                  </div>
                </div>

                <div className="postImage__container">
                  <img alt="post image" src={feed.postImage} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </>
    );
}

export default FeedsCard
