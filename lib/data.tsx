export type HouseType = {
    name: string,
    slug?: string,
    img: string,
    innerimg?: string[],
    rent: number,
    location: string
    rooms: {
        bed: number,
        bath: number
    }

}
export const houseData: HouseType[] = [
    {
        name: "Buckingham Palace",
        slug: "Buckingham-Palace",
        img: "https://greenhome-next.vercel.app/_next/image?url=%2Fphotos%2Fproperty1.jpg&w=1920&q=75",
        innerimg: [
            "https://th.bing.com/th/id/R.0b82b0e21afb0eb5fbcdb9d3e65cdd83?rik=Pg8JllTplF2pEg&pid=ImgRaw&r=0",
            "https://greenhome-next.vercel.app/_next/image?url=%2Fphotos%2Fproperty6.jpg&w=1920&q=75",
            "https://greenhome-next.vercel.app/_next/image?url=%2Fphotos%2Fproperty9.jpg&w=1920&q=75"
        ],
        rent:500,
        location: "Texas",
        rooms: {
            bed: 1,
            bath: 2
        }
    },
    {
        name: "Villa in the Clouds",
        slug: "Villa-in-the-Clouds",
        img: "https://greenhome-next.vercel.app/_next/image?url=%2Fphotos%2Fproperty3.jpg&w=1920&q=75",
        innerimg: [
            "https://th.bing.com/th/id/OIP.xPzhVrmFqo1Gglg7yrDxOwAAAA?pid=ImgDet&w=200&h=249&c=7&dpr=1.3",
            "https://th.bing.com/th/id/OIP.WdAAolm---1ePIqNkp88bwHaE9?rs=1&pid=ImgDetMain",
            "https://th.bing.com/th/id/R.4890a77c0a8ce2244c0bb7042437b99a?rik=nLqhC210sQXNjQ&riu=http%3a%2f%2fhomesoftherich.net%2fwp-content%2fuploads%2f2016%2f01%2fScreen-Shot-2016-01-03-at-11.15.30-PM.png&ehk=dFX9RnevWWu0%2f0U4LAEoY%2fu8xPxM%2bCr4UONP3WijbAA%3d&risl=&pid=ImgRaw&r=0"
        ],
        rent:600,
        location: "Texas",
        rooms: {
            bed: 1,
            bath: 2
        }
    },
    {
        name: "Sunset Villa",
        slug: "Sunset-Villa",
        img: "https://th.bing.com/th/id/R.d46d6912678791b9ea97460617166979?rik=dH%2bGHC4qq829eg&riu=http%3a%2f%2fwtop.com%2fwp-content%2fuploads%2f2016%2f05%2fturkeyrun.jpg&ehk=T3vRUfXLbXmO34T6cErPSiRx7c9Dyp6eEk6323WeEwM%3d&risl=&pid=ImgRaw&r=0",
        innerimg: [
            "https://th.bing.com/th/id/OIF.7VmTwLFGgXVRDQCCZJMQnw?rs=1&pid=ImgDetMain",
            "https://www.smalldesignideas.com/wp-content/uploads/2019/08/11-1.jpg",
            "https://i.pinimg.com/originals/ed/7c/a6/ed7ca65c4e5e4a3f7f15b284dbc18c22.jpg"
        ],
        rent:750,
        location: "California",
        rooms: {
            bed: 1,
            bath: 2
        }
    },
    {
        name: "2 BHK Apartment",
        slug: "2-BHK-Apartment",
        img: "https://www.johnhartrealestate.com/blog/wp-content/uploads/2021/07/ee06a97c1d2f32ab1c5c0143578c9d2bl-m3700790192xd-w1020_h770_q80.jpg",
        innerimg: [
            "https://th.bing.com/th/id/OIP.NUaikkNzNyN8o2HbPnJ-pQHaFs?pid=ImgDet&w=200&h=153&c=7&dpr=1.3",
            "https://rew-feed-images.global.ssl.fastly.net/trestle_rets_plus/_cloud_media/property/residential/1037201579-1-0e0ff55121d8758fe4735dfc2ae1352c-m.jpg",
            "https://th.bing.com/th/id/R.4890a77c0a8ce2244c0bb7042437b99a?rik=nLqhC210sQXNjQ&riu=http%3a%2f%2fhomesoftherich.net%2fwp-content%2fuploads%2f2016%2f01%2fScreen-Shot-2016-01-03-at-11.15.30-PM.png&ehk=dFX9RnevWWu0%2f0U4LAEoY%2fu8xPxM%2bCr4UONP3WijbAA%3d&risl=&pid=ImgRaw&r=0"
        ],
        rent:900,
        location: "Los Angelos",
        rooms: {
            bed: 1,
            bath: 2
        }
    },
    {
        name: "The Serenity House",
        slug: "The-Serenity-House",
        img: "https://www.jamesedition.com/stories/wp-content/uploads/2020/12/1_Israel.jpg",
        innerimg: [
            "https://th.bing.com/th/id/OIP.DYx0tESA0LeTJ0nN81_3rAHaE6?pid=ImgDet&w=200&h=132&c=7&dpr=1.3",
            "https://th.bing.com/th/id/OIP.WdAAolm---1ePIqNkp88bwHaE9?rs=1&pid=ImgDetMain",
            "https://i.pinimg.com/originals/ed/7c/a6/ed7ca65c4e5e4a3f7f15b284dbc18c22.jpg"
        ],
        rent:400,
        location: "London",
        rooms: {
            bed: 1,
            bath: 2
        }
    },
    {
        name: "2 BHK Independent House",
        slug: "2-BHK-Independent-House",
        img: "https://mlshkd6fvbce.i.optimole.com/cb:PRf_.12de6/w:auto/h:auto/q:mauto/https://homesoftherich.net/wp-content/uploads/2021/11/Screen-Shot-2021-11-18-at-6.48.01-AM.png",
        innerimg: [
            "https://www.bocadolobo.com/en/inspiration-and-ideas/wp-content/uploads/2023/02/Waltz-Collection-Discover-Pure-Refinement-In-Furniture-Design-1024x576.jpg",
            "https://rew-feed-images.global.ssl.fastly.net/trestle_rets_plus/_cloud_media/property/residential/1037201579-1-0e0ff55121d8758fe4735dfc2ae1352c-m.jpg",
            "https://th.bing.com/th/id/R.4890a77c0a8ce2244c0bb7042437b99a?rik=nLqhC210sQXNjQ&riu=http%3a%2f%2fhomesoftherich.net%2fwp-content%2fuploads%2f2016%2f01%2fScreen-Shot-2016-01-03-at-11.15.30-PM.png&ehk=dFX9RnevWWu0%2f0U4LAEoY%2fu8xPxM%2bCr4UONP3WijbAA%3d&risl=&pid=ImgRaw&r=0"
        ],
        rent:800,
        location: "Illinios",
        rooms: {
            bed: 1,
            bath: 2
        }
    },
]