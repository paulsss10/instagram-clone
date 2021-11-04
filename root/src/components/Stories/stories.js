import React, {useState} from 'react';
import thumbnail from '../../rsrcs/thumbnail-story.jpg';
import dummy_profile from '../../rsrcs/profile-dummy.jpg';

const CardStories = () => {
    const [storyElements, setStoryElements] = useState([
        {
            thumbnailImage: thumbnail,
            userHandle: "jordi_alba18",
            storyContent: "Blablablabla",
            viewStatus: false,
        },
        {
            thumbnailImage: thumbnail,
            userHandle: "jordi_alba18",
            storyContent: "Blablablabla",
            viewStatus: false,
        },
        {
            thumbnailImage: thumbnail,
            userHandle: "jordi_alba18",
            storyContent: "Blablablabla",
            viewStatus: false,
        },
        {
            thumbnailImage: thumbnail,
            userHandle: "jordi_alba18",
            storyContent: "Blablablabla",
            viewStatus: false,
        },
        {
            thumbnailImage: thumbnail,
            userHandle: "jordi_alba18",
            storyContent: "Blablablabla",
            viewStatus: false,
        },
        {
            thumbnailImage: thumbnail,
            userHandle: "jordi_alba18",
            storyContent: "Blablablabla",
            viewStatus: false,
        },
        {
            thumbnailImage: thumbnail,
            userHandle: "jordi_alba18",
            storyContent: "Blablablabla",
            viewStatus: false,
        },
        {
            thumbnailImage: thumbnail,
            userHandle: "jordi_alba18",
            storyContent: "Blablablabla",
            viewStatus: false,
        },
    ])

    return (
      <div className="card__container container--px">
        <div className="story__container card ">
          <div className="card__image">
            <img className="card__thumnails" src={dummy_profile} />
          </div>

          <div className="user__handle">
            <small className="handle">paul_deloria</small>
          </div>
        </div>
        {storyElements.map((story) => (
          <div className="story__container card ">
            <div className="card__image">
              <img className="card__thumnails" src={story.thumbnailImage} />
            </div>

            <div className="user__handle">
              <small className="handle">{story.userHandle}</small>
            </div>
          </div>
        ))}
      </div>
    );
}

export default CardStories