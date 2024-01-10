export default function TabButton(props)
{
    return(
        <li><button>{props.children}</button></li>
    )
}

//Note: props by default is always there in a function that is almost empty but to access content in between the custom tags we use a concept of children key o.e props.children
//   this children key can be anything a text , complex html code etc 