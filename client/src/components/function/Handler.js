export default class Handler {
    handleItemClick = (item, selectedItem, setSelectedItem) => {
        if (selectedItem.id === item.id) {
            setSelectedItem({});
        } else {
            setSelectedItem(item);
        }
    };
}