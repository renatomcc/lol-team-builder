export function getClasses(props: string): string {
    var classImage: string = "";
    switch (props) {
        case "Assassino":
            classImage = "https://i.ibb.co/KDynnRV/Assassin.png";
            break;
        case "Lutador":
            classImage = "https://i.ibb.co/8YxB85L/Fighter.png";
            break;
        case "Mago":
            classImage = "https://i.ibb.co/FzLYXcx/Mage.png";
            break;
        case "Atirador":
            classImage = "https://i.ibb.co/m9TGpqb/Marksman.png";
            break;
        case "Suporte":
            classImage = "https://i.ibb.co/BLCJJjV/Support.png";
            break;
        case "Tanque":
            classImage = "https://i.ibb.co/GvySsqx/Tank.png";
            break;
    }
    return classImage;
}