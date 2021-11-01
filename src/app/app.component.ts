import {Component, ViewChild} from '@angular/core';
import {ListViewComponent} from "@syncfusion/ej2-angular-lists";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('list')
  listviewInstance: ListViewComponent | undefined;
//define the array of string
  public data: Object[] = [
    {"text": "Hennessey Venom", "id": "list-01", icon: "delete-icon"},
    {"text": "Bugatti Chiron", "id": "list-02", icon: "delete-icon"},
    {"text": "Bugatti Veyron Super Sport", "id": "list-03", icon: "delete-icon"},
    {"text": "SSC Ultimate Aero", "id": "list-04", icon: "delete-icon"},
    {"text": "Koenigsegg CCR", "id": "list-05", icon: "delete-icon"},
    {"text": "McLaren F1", "id": "list-06", icon: "delete-icon"},
    {"text": "Aston Martin One- 77", "id": "list-07", icon: "delete-icon"},
    {"text": "Jaguar XJ220", "id": "list-08", icon: "delete-icon"},
    {"text": "McLaren P1", "id": "list-09", icon: "delete-icon"},
    {"text": "Ferrari LaFerrari", "id": "list-10", icon: "delete-icon"},
    {"text": "Zenvo ST1", "id": "list-11", icon: "delete-icon"},
    {"text": "Lamborghini Veneno", "id": "list-12", icon: "delete-icon"},
    {"text": "Lamborghini Veneno", "id": "list-13", icon: "delete-icon"},
    {"text": "Lamborghini Veneno", "id": "list-14", icon: "delete-icon"},
    {"text": "Lamborghini Veneno", "id": "list-15", icon: "delete-icon"},
    {"text": "Lamborghini Veneno", "id": "list-16", icon: "delete-icon"},
    {"text": "Lamborghini Veneno", "id": "list-17", icon: "delete-icon"},
    {"text": "Lamborghini Veneno", "id": "list-18", icon: "delete-icon"},
    {"text": "Lamborghini Veneno", "id": "list-19", icon: "delete-icon"},
    {"text": "Lamborghini Veneno", "id": "list-21", icon: "delete-icon"},
    {"text": "Lamborghini Veneno", "id": "list-22", icon: "delete-icon"},
    {"text": "Lamborghini Veneno", "id": "list-23", icon: "delete-icon"},
    {"text": "Lamborghini Veneno", "id": "list-24", icon: "delete-icon"},
    {"text": "Lamborghini Veneno", "id": "list-25", icon: "delete-icon"},
    {"text": "Lamborghini Veneno", "id": "list-26", icon: "delete-icon"},
    {"text": "Lamborghini Veneno", "id": "list-27", icon: "delete-icon"},
    {"text": "Lamborghini Veneno", "id": "list-28", icon: "delete-icon"},
    {"text": "Lamborghini Veneno", "id": "list-29", icon: "delete-icon"}

  ];

  public fields: Object = {text: "text", iconCss: "icon"};

  deleteItem(args: any) {
    args.stopPropagation();
    let liItem = args.target.parentElement.parentElement;
    if (this.listviewInstance) {
      this.listviewInstance.removeItem(liItem);
    }
    this.onComplete();
  }

  onComplete() {
    console.log("on complete");
    let iconEle = document.getElementsByClassName("delete-icon");
    //Event handler to bind the click event for delete icon
    Array.from(iconEle).forEach((element) => {
      element.addEventListener("click", this.deleteItem.bind(this));
    });
  }

  addItem() {
    let data = {
      text: "Koenigsegg - " + (Math.random() * 1000).toFixed(0),
      id: (Math.random() * 1000).toFixed(0).toString(),
      icon: "delete-icon"
    };
    if (this.listviewInstance) {
      this.listviewInstance.addItem([data]);
    }
  }
}
