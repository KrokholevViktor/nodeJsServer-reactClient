import {makeAutoObservable} from 'mobx';

export default class DeviceStore {
    constructor() {
        this._types = [
            {id:1, name: 'Refrigerators'},
            {id:2, name: 'Smartphones'},
            {id:3, name: 'Computers'},
            {id:4, name: 'Laptops'}
        ]
        this._brands = [
            {id:1, name: 'Samsung'},
            {id:2, name: 'Apple'},
            {id:3, name: 'Xaomi'},
            {id:4, name: 'Lenovo'},
            {id:5, name: 'Asus'}
            
        ]
        this._devices = [
            {id:1, name: 'Iphone 11 pro', price: 25000, rating: 5, img: 'https://flowbite.com/docs/images/examples/image-1@2x.jpg'},
            {id:2, name: 'Iphone 12 pro', price: 25000, rating: 5, img: 'https://flowbite.com/docs/images/examples/image-1@2x.jpg'},
            {id:3, name: 'Iphone 13 pro', price: 25000, rating: 5, img: 'https://flowbite.com/docs/images/examples/image-1@2x.jpg'},
            {id:4, name: 'Iphone 14 pro', price: 25000, rating: 5, img: 'https://flowbite.com/docs/images/examples/image-1@2x.jpg'},
            {id:5, name: 'Iphone 11 pro', price: 25000, rating: 5, img: 'https://flowbite.com/docs/images/examples/image-1@2x.jpg'},
            {id:6, name: 'Iphone 12 pro', price: 25000, rating: 5, img: 'https://flowbite.com/docs/images/examples/image-1@2x.jpg'},
            {id:7, name: 'Iphone 13 pro', price: 25000, rating: 5, img: 'https://flowbite.com/docs/images/examples/image-1@2x.jpg'},
            {id:8, name: 'Iphone 14 pro', price: 25000, rating: 5, img: 'https://flowbite.com/docs/images/examples/image-1@2x.jpg'}
        ]
        this._selectedType = {}
        this._selectedBrand = {}
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

    setSelectedType(type) {
        this._selectedType = type
    }

    setSelectedBrand(brand) {
        this._selectedBrand = brand
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
    get selectedType() {
        return this._selectedType
    }
    get selectedBrand() {
        return this._selectedBrand
    }
}