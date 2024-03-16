const ItemCount = ({stock, initial, onAdd}) => {
const [count, setCount] = useState(initial)

const handleCountChange = (value) => {
    const newCount = count + value
    if (newCount >=1 && newCount <= stock){
        setCount (newCount)
    }
}


const handleAdd = () => {
if (count > 0) {
    onAdd(count)
}
}


    return ( 
        <div>
            <button OnClick={()=>handleCountChange(-1)}>                                      
                -
            </button>
            <button OnClick={()=>handleCountChange(+1)}>
                +
            </button>
            <button OnClick={()=>handleAdd()}>
                Agregar al carrito
            </button>
        </div>
     );
}
 
export default ItemCount;(stock, initial, onAdd)