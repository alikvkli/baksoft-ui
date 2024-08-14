import { useParams, Navigate } from 'react-router-dom';
import CaptionDetail from '@/pages/caption-detail';

const CaptionRouter = () => {
    const { caption_slug } = useParams<string>();

    if (!caption_slug) {
        return <Navigate to="/404" />;
    }

    if (caption_slug.includes('---')) {
        return <p>test</p>;
    } else if (caption_slug.includes('--')) {
        return <CaptionDetail />;
    }

    return <Navigate to="/404" />;
};

export default CaptionRouter;
