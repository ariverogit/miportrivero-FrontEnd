import { Injectable } from '@angular/core';
import {Storage,getDownloadURL,list,ref, uploadBytes} from '@angular/fire/storage'

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  url: string="";
  constructor(private storage:Storage) { }

  public uploadImage($event: any,name:string){
    const file = $event.target.files[0];
    const imgRef= ref(this.storage,'Imagen/'+name)
    uploadBytes(imgRef,file)
    .then(response=>(this.getImages))
    .catch(error=>console.log(error))
   
  }

  getImages(){
    const imagesRef = ref(this.storage,'Imagen')
    list(imagesRef)
    .then(async response =>{
      for(let item of response.items){
        this.url=await getDownloadURL(item);
        console.log("esta URL es: " + this.url);
      }
    })
    .catch(error=>console.log(error))
  }
}
