import * as FaIcons from "react-icons/fa";
import * as GiIcons from "react-icons/gi";
import * as MdIcons from "react-icons/md";
import * as BiIcons from "react-icons/bi";
import * as GoIcons from "react-icons/go";

type IconSet = typeof FaIcons | typeof GiIcons | typeof MdIcons | typeof BiIcons | typeof GoIcons;

interface IconMap {
    fa: IconSet;
    gi: IconSet;
    md: IconSet;
    bi: IconSet;
    go: IconSet;
}

export const iconMap: IconMap = {
    fa: FaIcons,
    gi: GiIcons,
    md: MdIcons,
    bi: BiIcons,
    go: GoIcons,
};



export const getIconComponent = (prefix: string, iconName: string): React.ComponentType<any> | null => {
    const iconSet = iconMap[prefix as keyof typeof iconMap];
    if (iconSet) {
        return iconSet[iconName as keyof typeof iconSet] || FaIcons.FaRegQuestionCircle;
    }
    return FaIcons.FaRegQuestionCircle;
};