import {makeAutoObservable} from 'mobx';

export default class DeviceStore {
    constructor() {
        this._types = [
            {id:1, name: 'Холодильники'},
            {id:2, name: 'Смартфоны'}
        ]
        this._brands = [
            {id:1, name: 'Samsing'},
            {id:2, name: 'Apple'}
        ]
        this._devices = [
            {id:1, name: 'Iphone 11 pro', price: 25000, rating: 5, img: 'https://flowbite.com/docs/images/examples/image-1@2x.jpg'},
            {id:2, name: 'Iphone 12 pro', price: 25000, rating: 5, img: 'https://flowbite.com/docs/images/examples/image-1@2x.jpg'},
            {id:3, name: 'Iphone 13 pro', price: 25000, rating: 5, img: 'https://flowbite.com/docs/images/examples/image-1@2x.jpg'},
            {id:4, name: 'Iphone 14 pro', price: 25000, rating: 5, img: 'https://flowbite.com/docs/images/examples/image-1@2x.jpg'}
        ]
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }
    setBrands(brands) {
        this._brands = brands
    }
    setDevices(devices) {
        this._devices = devices
    }

    get types() {
        return this._types
    }
    get brands() {
        return this._brands
    }
    get devices() {
        return this._devices
    }
}