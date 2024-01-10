export function CoreConcepts(props) {
    return (
      <li>
        <h3>{props.title}</h3>
        <img src={props.image} />
        <p>{props.description}</p>
      </li>
    )
  }

  //Using props for using a same component multiple times 

  // format 1 : function CoreConcepts(props){ <h3>{props.title}</h3> }\
  //format 2: Destructuring the data function CoreConcepts({title, image, description}) { <h3>title</h3>}
  //format 3: Grouping data function CoreConcepts ({...argument}) {<h3>{argument.title}</h3>}
  // Note Observations 1. argumetns is a keyword 
  //                  2. We can use any name instead of argument or we can directly use props instead i.e {...props}

  //By default props are objects that contains the attributes as key value pairs. The attribute key names are upto the user
  //but use the same key as passed from the function 

  // For passing the function there are also methods either it can be passed as a whole object or as key value pairs 
  