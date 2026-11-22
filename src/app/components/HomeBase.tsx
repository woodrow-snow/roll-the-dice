import Svg, { Polygon } from 'react-native-svg'

type HomeBaseProps = {
    size: number;
    color: string;
}

/** Renders the app's custom home-base SVG icon at the requested size and color. */
export default function HomeBase({size, color}: HomeBaseProps) {
    return (
        <Svg width={size} height={size} viewBox='0 0 100 100'>
            <Polygon
                points="10,10 90,10 90,50 50,90 10,50"
                fill={color}
                stroke={color}
                strokeWidth={4}
                strokeLinejoin='round'
            />
        </Svg>
    );
}