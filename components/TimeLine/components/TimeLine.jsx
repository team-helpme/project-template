/* eslint-disable no-tabs */
import React from 'react';
import {
    Icon, Divider
} from 'antd';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { controlModal, fetchProfileData } from '../actions';

import PageLayout from '../../Layout';
import CreatePostModal from './CreatePostModal';
import { CreatePostComponent } from './CreatePostComponent';

import {
    CREATEPOST_PLACEHOLDER, TIMELINE_TITLE
} from '../constant';
import TimeLineProfileInfo from './TimeLineProfileInfo';
import TimeLinePopularTopic from './TimeLinePopularTopic';
import TimeLineOnlineFriends from './TimeLineOnlineFriends';
import TimeLinePosts from './TimeLinePosts';

/** Helper function that is used to render the TimeLine Component
 * @class TimeLine
 * @extends {React.Component}
 * @return {Object} returns the TimeLine component
 */
class TimeLine extends React.Component {
    // state = {
    //     activeComment: '',
    //     activeLikeButton: '',
    //     comment: false,
    //     commentValue: '',
    //     like: false,
    //     likeCount: 0,
    //     profileData: '',
    //     statusValue: '',
    //     visible: false,
    // };

    componentDidMount() {
    // this.setState({ profileData: data });
        const { fetchProfileData } = this.props;
        fetchProfileData();
    }

  /**
   * Helper function that handels the visibility of a modal
   * @function
   * @return {Object} returns 'true' to show the modal
   */
  modalHandler = () => {
      const { controlModal } = this.props;
      controlModal();
  };

  /**
   * Helper function that is used to handle the data from post component, it also closes the post modal
   * @function
   * @return {Object} returns 'false' to close the modal post component
   */
  handleOk = e => {
      const { visible } = this.state;
      // close the modal;
      if (visible) {
          this.setState({
              visible: false,
          });
      }

      // make an api call
  };

  /**
  * Helper function that is used to hable clicking on the like button
  * @function
  * @param {Number} id the id of the liked post
  * @return {Object} changes the state of the like component
  */
  handleLikeButton = id => {
      const { like } = this.state;
      this.setState({
          like: !like,
      });
  };

  /**
  * Helper function that is used to handle clicking on the comment button
  * @function
  * @param {Number} id the id of the commented post
  * @return {Object} changes the state of the like component
  */
  handleComment = id => {
      const { comment } = this.state;
      this.setState({
          activeComment: id,
          comment: !comment,
      });
  };

  /**
  * Helper function that is used to handle comment value
  * @function
  * @return {Object} changes the state of the comment value
  */
  handleCommentValue = e => {
      this.setState({
          commentValue: e.target.value,
      });
  }

  /**
  * Helper function that is used to handle status value
  * @function
  * @return {Object} changes the state of the status value
  */
  handleStatusValue = e => {
      this.setState({
          statusValue: e.target.value,
      });
  }

  render() {
      return <button onClick={this.modalHandler}>test</button>;
  }
  // 	render() {
  // 	    const {
  // 	        profileData, visible, statusValue, like, likeCount, activeComment, activeLikeButton, commentValue,
  // 	    } = this.state;
  // 	    return (
  // 	        <PageLayout
  // 	            isSiderPresent={profileData.length > 0}
  // 	            isFooterPresent={false}
  //   isAuthenticated
  // 	            title={TIMELINE_TITLE}
  // 	        >
  // 	            <main className="TimeLine_content">

    // 	                <section>
    //     {/* edit component for mobile */}
    //     <div className="create-icon-container">
    // 	                        <Icon type="form" className="create-icon" onClick={this.modalHandler} />
    // 	                    </div>

    //     <CreatePostModal
    // 	                        visible={visible}
    // 	                        handleOkFunction={this.handleOk}
    // 	                        closeModal={this.modalHandler}
    // 	                        handleOnChange={this.handleStatusValue}
    //   textValue={statusValue}
    // 	                    />
    // 	                </section>

    //     {/* profile info desktop */}
    //     <TimeLineProfileInfo />
    // 	                {/* popular topics aside */}
    // 	                <TimeLinePopularTopic />
    //     {/* online friends aside tab */}
    // 	                <TimeLineOnlineFriends />

    //     {/* main timeline */}
    //     <section className="TimeLine_post">
    //     {/* create post component */}
    //     <section className="TimeLine-post-component">
    // 	                        <CreatePostComponent
    //   InputPlaceholder={CREATEPOST_PLACEHOLDER}
    //   rowHeight={5}
    // 	                            handleOnChange={this.handleStatusValue}
    // 	                            textValue={statusValue}
    // 	                        />
    // 	                    </section>

    // 	                    <Divider />

    //     <section style={{ background: 'white' }}>
    //     {/* timeline posts */}
    // 	                        <TimeLinePosts
    // 	                            profileData={profileData}
    // 	                            like={like}
    // 	                            likeCount={likeCount}
    // 	                            activeComment={activeComment}
    // 	                            activeLikeButton={activeLikeButton}
    // 	                            handleComment={this.handleComment}
    // 	                            handleLikeButton={this.handleLikeButton}
    // 	                            handleOk={this.handleOk}
    // 	                            handleOnChange={this.handleCommentValue}
    // 	                            textValue={commentValue}
    // 	                        />
    // 	                    </section>
    // 	                </section>
    // 	            </main>
    // 	        </PageLayout>
    // 	    );
    // 	}
}

const mapStateToProps = state => {
    const { isOpen } = state;
    return { isOpen };
};

const mapDispatchToProps = dispatch => bindActionCreators({ controlModal, fetchProfileData }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TimeLine);
