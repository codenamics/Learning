// Storage Controller

// Item controller
const ItemCtrl = (function() {
    //Item constructor
    const Item = function(id, name, calories) {
        this.id = id;
        this.name = name;
        this.calories = calories;
    }

    //Data Structure / State

    const data = {
            items: [
                { id: 0, name: 'Steak', calories: 200 },
                { id: 1, name: 'Shake', calories: 1500 },
                { id: 2, name: 'Sandwith', calories: 900 }
            ],
            currentItem: null,
            totalCalories: 0
        }
        //Public method
    return {
        getItems: function() {
            return data.items;
        },
        logData: function() {
            return data;
        },
        addItem: function(name, calories) {
            let ID;
            if (data.items.lenght > 0) {
                ID = data.items[data.items.length - 1].id + 1
            } else {
                ID = 0;
            }
            const calories = parseInt(calories)

            newItem = new Item(ID, name, calories)
            data.items.push(newItem)
            return newItem
        }
    }
})();


//UI controller
const UICtrl = (function() {
    const UISelectors = {
        itemList: '#item-list',
        addBtn: '.add-btn',
        itemName: '#item-name',
        itemcal: '#item-calories'
    }
    return {
        populateItems: function(items) {
            let html = '';
            items.forEach(item => {
                html += `
                <li class="collection-item" id="item-${item.id}">
                <strong>${item.name}: </strong> <em>${item.calories}Calories</em>
                <a href="#" class="secondary-content">
                  <i class="edit-item fa fa-pencil"></i>
                </a>
              </li>
                `
            });
            document.querySelector(UISelectors.itemList).innerHTML = html
        },
        getSelectors: function() {
            return UISelectors
        },
        getInput: function() {
            return {
                name: document.querySelector(UISelectors.itemName).value,
                calories: document.querySelector(UISelectors.itemcal).value
            }

        }
    }
})();

//App controller
const App = (function(ItemCtrl, UICtrl) {
    //Load event listeners
    const loadEventListiners = function() {
        //Get UI selectors
        const UISelectors = UICtrl.getSelectors()

        //Add item event
        document.querySelector(UISelectors.addBtn).addEventListener('click', itemsAddSubmit)
    }
    const itemsAddSubmit = function(e) {

        //Get form input form UICtrl
        const input = UICtrl.getInput()


        if (input.name !== '' && input.calories !== '') {
            const newItem = ItemCtrl.addItem(input.name, input.calories)
        }


        e.preventDefault();

    }

    return {
        init: function() {
            console.log('init')

            //Fetch items from Item controller
            const items = ItemCtrl.getItems()

            //Populate list with items
            UICtrl.populateItems(items)
            loadEventListiners()
        }
    }

})(ItemCtrl, UICtrl);

// App init
App.init();