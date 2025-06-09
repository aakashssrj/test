import User from "../models/user.model.js";
import Message from "../models/message.model.js";

export const getUsersForSidebar = async (req, res) => {
  try {
    const loginUser = req.user._id;
    const filteredUsers = await User.find({ _id: { $ne: loginUser } }).select(
      "-password"
    );

    res.status(200).json({
      message: "Users fetched successfully",
      users: filteredUsers,
    });
  } catch (error) {
    console.error("Error fetching users for sidebar:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const getMessages = async (req, res) => {
  try {
    const { id: userToChatId } = req.params;
    const myId = req.user._id;

    const messages = await Message.find({
      $or: [
        { senderId: myId, receiverId: userToChatId },
        { senderId: userToChatId, receiverId: myId },
      ],
    });
    res.status(200).json({
      message: "Messages fetched successfully",
      messages: messages,
    });
  } catch (error) {
    console.error("Error fetching messages:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const sendMessage = async (req, res) => {
    try {
        const { text , image } = req.body;
        const {id : receiverId} = req.params;

        const senderId  = req.user._id;

        let imageUrl = null 
        if(image){
            const uploadResponse = await cloudinary.uploader.upload(image)
            imageUrl = uploadResponse.secure_url;

        }
        const newMessage = await new Message ({
            senderId,
            receiverId,
            text,
            image
        })

        await newMessage.save();
        //TODO :: IMPLEMENT SOCKET.IO TO SEND MESSAGE TO THE RECEIVER FOR REAL-TIME UPDATES
        res.status(200).json({
            message: "Message sent successfully",
            newMessage
            
        });

    } catch (error) {
        console.error("Error sending message:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
  }
