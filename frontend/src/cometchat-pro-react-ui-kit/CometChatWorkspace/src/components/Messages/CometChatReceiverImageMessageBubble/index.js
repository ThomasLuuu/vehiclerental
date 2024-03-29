import React from "react";
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/core";
import PropTypes from "prop-types";
import { CometChat } from "@cometchat-pro/chat";

import { CometChatMessageActions, CometChatThreadedMessageReplyCount, CometChatReadReceipt } from "../";
import { CometChatMessageReactions } from "../Extensions";
import { CometChatAvatar } from "../../Shared";

import { CometChatContext } from "../../../util/CometChatContext";
import * as enums from "../../../util/enums.js";
import { checkMessageForExtensionsData } from "../../../util/common";

import { theme } from "../../../resources/theme";
import Translator from "../../../resources/localization/translator";

import {
	messageContainerStyle,
	messageWrapperStyle,
	messageThumbnailStyle,
	messageDetailStyle,
	nameWrapperStyle,
	nameStyle,
	messageImgContainerStyle,
	messageImgWrapperStyle,
	messageInfoWrapperStyle,
	messageReactionsWrapperStyle
} from "./style";

import srcIcon from "./resources/1px.png";

class CometChatReceiverImageMessageBubble extends React.Component {
	static contextType = CometChatContext;

	constructor(props, context) {

		super(props, context);
		this._isMounted = false;
		this.imgRef = React.createRef();

		this.state = {
			imageUrl: srcIcon,
			imageName: Translator.translate("LOADING", this.context.language),
			isHovering: false,
		};
	}

	shouldComponentUpdate(nextProps, nextState) {

		const currentMessageStr = JSON.stringify(this.props.message);
		const nextMessageStr = JSON.stringify(nextProps.message);

		if (currentMessageStr !== nextMessageStr 
		|| this.state.imageUrl !== nextState.imageUrl 
		|| this.state.isHovering !== nextState.isHovering) {
			return true;
		}

		return false;
	}

	componentDidMount() {
		this._isMounted = true;
		this.setImage();
	}

	componentDidUpdate(prevProps, prevState) {

		const previousMessageStr = JSON.stringify(prevProps.message);
		const currentMessageStr = JSON.stringify(this.props.message);

		if (previousMessageStr !== currentMessageStr) {
			this.setImage();
		}
	}

	componentWillUnmount() {
		this._isMounted = false;
	}

	chooseImage = thumbnailGenerationObject => {
		const smallUrl = thumbnailGenerationObject["url_small"];
		const mediumUrl = thumbnailGenerationObject["url_medium"];

		const mq = window.matchMedia(this.props.theme.breakPoints[0]);

		let imageToDownload = mediumUrl;
		if (mq.matches) {
			imageToDownload = smallUrl;
		}

		return imageToDownload;
	};

	setImage = () => {

		const thumbnailGenerationData = checkMessageForExtensionsData(this.props.message, "thumbnail-generation");
		
		if (thumbnailGenerationData) {

			let imageName = "";
			if (this.props.message.data.attachments 
			&& typeof this.props.message.data.attachments === "object" 
			&& this.props.message.data.attachments.length) {

				imageName = this.props.message.data.attachments[0]?.name;
			}

			const mq = window.matchMedia(this.props.theme.breakPoints[0]);
			mq.addListener(() => {
				const imageToDownload = this.chooseImage(thumbnailGenerationData);
				let img = new Image();
				img.src = imageToDownload;
				img.onload = () => {
					if (this._isMounted && this.state.imageUrl !== img.src) {
						this.setState({ imageUrl: img.src, imageName: imageName });
					}
				};
			});

			const imageToDownload = this.chooseImage(thumbnailGenerationData);
			this.downloadImage(imageToDownload)
				.then(response => {
					let img = new Image();
					img.src = imageToDownload;
					img.onload = () => {
						if (this._isMounted && this.state.imageUrl !== img.src) {
							this.setState({ imageUrl: img.src, imageName: imageName });
						}
					};
				})
				.catch(error => console.error(error));
		} else {
			this.setMessageImageUrl();
		}
	};

	setMessageImageUrl = () => {

		if (this.props.message.data.attachments 
		&& typeof this.props.message.data.attachments === "object" 
		&& this.props.message.data.attachments.length) {

			let img = new Image();
			img.src = this.props.message.data.attachments[0].url;
			const imageName = this.props.message.data.attachments[0]?.name;
			img.onload = () => {
				if (this._isMounted && this.state.imageUrl !== img.src) {
					this.setState({ imageUrl: img.src, imageName: imageName });
				}
			};
		}
		
	};

	downloadImage(imgUrl) {
		const promise = new Promise((resolve, reject) => {
			const xhr = new XMLHttpRequest();
			xhr.open("GET", imgUrl, true);
			xhr.responseType = "blob";

			xhr.onload = () => {
				if (xhr.readyState === 4) {
					if (xhr.status === 200) {
						this.timer = null;
						resolve(xhr.response);
					} else if (xhr.status === 403) {
						this.timer = setTimeout(() => {
							this.downloadImage(imgUrl)
								.then(response => resolve(response))
								.catch(error => reject(error));
						}, 800);
					}
				} else {
					reject(xhr.statusText);
				}
			};

			xhr.onerror = event => reject(new Error("There was a network error.", event));
			xhr.ontimeout = event => reject(new Error("There was a timeout error.", event));
			xhr.send();
		});

		return promise;
	}

	open = () => {
		this.props.actionGenerated(enums.ACTIONS["VIEW_ORIGINAL_IMAGE"], this.props.message);
	};

	handleMouseHover = () => {
		this.setState(this.toggleHoverState);
	};

	toggleHoverState = state => {
		return {
			isHovering: !state.isHovering,
		};
	};

	render() {
		let avatar = null,
			name = null;
		if (this.props.message.receiverType === CometChat.RECEIVER_TYPE.GROUP) {
			avatar = (
				<div css={messageThumbnailStyle()} className="message__thumbnail">
					<CometChatAvatar user={this.props.message.sender} />
				</div>
			);

			name = (
				<div css={nameWrapperStyle(avatar)} className="message__name__wrapper">
					<span css={nameStyle(this.context)} className="message__name">
						{this.props.message.sender.name}
					</span>
				</div>
			);
		}

		let messageReactions = null;
		const reactionsData = checkMessageForExtensionsData(this.props.message, "reactions");
		if (reactionsData) {
			if (Object.keys(reactionsData).length) {
				messageReactions = (
					<div css={messageReactionsWrapperStyle()} className="message__reaction__wrapper">
						<CometChatMessageReactions message={this.props.message} actionGenerated={this.props.actionGenerated} />
					</div>
				);
			}
		}

		let toolTipView = null;
		if (this.state.isHovering) {
			toolTipView = <CometChatMessageActions message={this.props.message} actionGenerated={this.props.actionGenerated} />;
		}

		return (
			<div css={messageContainerStyle()} className="receiver__message__container message__image" onMouseEnter={this.handleMouseHover} onMouseLeave={this.handleMouseHover}>
				<div css={messageWrapperStyle()} className="message__wrapper">
					{avatar}
					<div css={messageDetailStyle(name)} className="message__details">
						{name}
						{toolTipView}
						<div css={messageImgContainerStyle()} className="message__image__container">
							<div css={messageImgWrapperStyle(this.context)} onClick={this.open} className="message__image__wrapper">
								<img
									crossorigin="anonymous"
									src={this.state.imageUrl}
									alt={this.state.imageName}
									ref={el => {
										this.imgRef = el;
									}}
								/>
							</div>
						</div>

						{messageReactions}

						<div css={messageInfoWrapperStyle()} className="message__info__wrapper">
							<CometChatReadReceipt message={this.props.message} />
							<CometChatThreadedMessageReplyCount message={this.props.message} actionGenerated={this.props.actionGenerated} />
						</div>
					</div>
				</div>
			</div>
		);
	}
}

// Specifies the default values for props:
CometChatReceiverImageMessageBubble.defaultProps = {
	theme: theme,
	actionGenerated: () => {},
};

CometChatReceiverImageMessageBubble.propTypes = {
	theme: PropTypes.object,
	actionGenerated: PropTypes.func.isRequired,
	message: PropTypes.object.isRequired,
};

export { CometChatReceiverImageMessageBubble };