import React from 'react'
import AnchorLink from "react-anchor-link-smooth-scroll";
import {SelectedPage} from "@/shared/types";

type Props = {
    page: string;
    selectedPage: SelectedPage
    //this is a function that is why we import it like this code below
    setSelectedPage: (value: SelectedPage) => void;
}

const Link = ({ page, selectedPage, setSelectedPage }: Props) => {

    //"as" keyword, Typescript doesn't know we converted it, forces TS treat this as SelectedPage enum
    const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage;


    return (
        <AnchorLink
            href={`#${lowerCasePage}`}
            onClick={() => setSelectedPage(lowerCasePage)}
            className={`${selectedPage === lowerCasePage ? "text-primary-500" : ""} 
           transition duration-500 hover:text-primary-300`}
        >
            {page}
        </AnchorLink>
    )
}

export default Link;