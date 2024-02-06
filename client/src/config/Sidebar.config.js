import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SendIcon from '@mui/icons-material/Send';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

const SIDEBAR_DATA = [
  {
    name: "inbox",
    title: "Inbox",
    icon: InsertPhotoIcon,
  },
  {
    name: "starred",
    title: "Starred",
    icon: StarOutlineIcon,
  },
  {
    name: "snoozed",
    title: "Snoozed",
    icon: AccessTimeIcon,
  },
  {
    name: "send",
    title: "Send",
    icon: SendIcon,
  },
  {
    name: "draft",
    title: "Draft",
    icon: InsertDriveFileIcon,
  },
  {
    name: "trash",
    title: "Trash",
    icon: DeleteOutlineIcon,
  },
  {
    name: "all_mail",
    title: "All Mail",
    icon: MailOutlineIcon,
  }
];

export default SIDEBAR_DATA;
