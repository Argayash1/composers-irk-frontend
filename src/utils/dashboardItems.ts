
import UserIcon from '@mui/icons-material/Group';
import ArticleIcon from '@mui/icons-material/Article';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import HeadsetIcon from '@mui/icons-material/Headset';
import VideoStableIcon from '@mui/icons-material/VideoStable';
import ReportIcon from '@mui/icons-material/Report';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import HistoryIcon from '@mui/icons-material/History';
import AccountTreeIcon from '@mui/icons-material/AccountTree';

export const menuIcons = [NewspaperIcon, UserIcon, AccountTreeIcon, MusicNoteIcon, HeadsetIcon, VideoStableIcon, ReportIcon, ArticleIcon, HistoryIcon]

export const dashboardItems = [
    { name: 'Новости', path: '/admin/news', icon: menuIcons[0] },
    { name: 'Состав', path: '/admin/members', icon: menuIcons[1] },
    { name: 'Проекты', path: '/admin/projects', icon: menuIcons[2] },
    { name: 'Ноты', path: '/admin/scores', icon: menuIcons[3] },
    { name: 'Aудиозаписи', path: '/admin/audios', icon: menuIcons[4] },
    { name: 'Видеозаписи', path: '/admin/videos', icon: menuIcons[5] },
    { name: 'Отчёты', path: '/admin/reports', icon: menuIcons[6] },
    { name: 'Статьи', path: '/admin/articles', icon: menuIcons[7] },
    { name: 'Наша история', path: '/admin/ourHistory', icon: menuIcons[8] }
]