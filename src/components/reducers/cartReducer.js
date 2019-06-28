import img5 from '../../asset/shopping cart/cup1.png';
import img2 from '../../asset/shopping cart/cup2.png';
import img3 from '../../asset/shopping cart/feeding kit.jpg';
import img4 from '../../asset/shopping cart/lid.jpg';
import img1 from '../../asset/shopping cart/membership_card.png';

const initState = {
    items: [
        {id: 1, title: "Membership Card", description: "Join us today! And we'll offer you discount for each time you come!",
            price: 10, img: img1},
        {id: 2, title: "Tea Cup Set", description: "Tea Cup Set is made by advanced 3D print technology! Don't miss it.",
            price: 29, img: img2},
        {id: 3, title: "Feeding Kit", description: "Good assistance when feeding liquid to your pets. Smoothly and easily.",
            price: 15, img: img3},
        {id: 4, title: "Can Lid", description: "Feel annoying when opening a large can of food? Please try this, you'll love it!",
            price: 9, img: img4},
        {id: 5, title: "Cat Lid", description: "This lovely cup lid is only available in Catmosphere! Lid Only.",
            price: 10, img: img5}
    ],
    addedItems: [],
    total: 0
};

const cartReducer = (state = initState, action) =>{

    if(action.type === "ADD_TO_CART"){
        let addedItem = state.items.find(item => item.id === action.payload.id);
        let existed_item = state.addedItems.find(item => action.payload.id === item.id);

        if(existed_item){
            //items have properties quantity?
            addedItem.quantity += 1;
            return {
                ...state,
                total: state.total + addedItem.price
            }
        }else{
            addedItem.quantity = 1;
            return {
                ...state,
                addedItems: [...state.addedItems, addedItem],
                total: state.total + addedItem.price
            }
        }

    }

    return state;
};

export default cartReducer;