import {
  HEADER_MAIN_INFORMATION,
  HEADER_ACCOUNT_INFORMATION,
  HEADER_ORGANIZATION_ADMINS,
  HEADER_HARDWARE,
  HEADER_SUMMARY,
  FORM_COMPANY_NAME,
  FORM_ID_NUMBER,
  FORM_STREET,
  FORM_CITY,
  FORM_POSTAL_CODE,
  FORM_COUNTRY,
  FORM_ACCOUNT_NUMBER,
  FORM_ORDER_INFORMATION,
  FORM_AMOUNT,
  FORM_CARD_NUMBER,
  FORM_FIRST_NAME,
  FORM_LAST_NAME,
  FORM_EMAIL,
  FORM_PHONE_NUMBER,
  FORM_TITLE,
  FORM_NOTES
} from '../task__kmc-416/constants';

class FieldsStructure{

  getDataStructure(){
    return [
      {
        title: HEADER_MAIN_INFORMATION,
        fields: [
          {
            fieldName: FORM_COMPANY_NAME,
            value: ''
          },
          {
            fieldName: FORM_ID_NUMBER,
            value: ''
          },
          {
            fieldName: FORM_STREET,
            value: ''
          },
          {
            fieldName: FORM_CITY,
            value: ''
          },
          {
            fieldName: FORM_POSTAL_CODE,
            value: ''
          },
          {
            fieldName: FORM_COUNTRY,
            value: ''
          }
        ]
      },
      {
        title: HEADER_ACCOUNT_INFORMATION,
        fields: [
          {
            fieldName: FORM_ACCOUNT_NUMBER,
            value: ''
          },
          {
            fieldName: FORM_ORDER_INFORMATION,
            value: ''
          },
          {
            fieldName: FORM_AMOUNT,
            value: ''
          },
          {
            fieldName: FORM_CARD_NUMBER,
            value: ''
          }
        ]
      },
      {
        title : HEADER_ORGANIZATION_ADMINS,
        fields : [
          {
            fieldName : FORM_FIRST_NAME,
            value : ''
          },
          {
            fieldName : FORM_LAST_NAME,
            value : ''
          },
          {
            fieldName : FORM_EMAIL,
            value : ''
          },
          {
            fieldName : FORM_PHONE_NUMBER,
            value : ''
          },
          {
            fieldName : FORM_TITLE,
            value : ''
          },
          {
            fieldName : FORM_NOTES,
            value : ''
          }
        ]
      },
      {
        title : HEADER_HARDWARE,
        fields : [
          {
            'Model Number': 'Number 123',
            'Hardware Type': 'Type 123',
            'Manufacturer': 'Man 123',
            'Hardware ID': 123123
          },
          {
            'Model Number': 'Number 333',
            'Hardware Type': 'Type 333',
            'Manufacturer': 'Man 333',
            'Hardware ID': 33333
          },
          {
            'Model Number': 'Number 666',
            'Hardware Type': 'Type 666',
            'Manufacturer': 'Man 666',
            'Hardware ID': 6666
          }
        ]
      },
      {
        title : HEADER_SUMMARY,
        fields : []
      }
    ]
  }
  getDataByTitle(title, obj){
    let _obj =  obj.filter(dataItem=>dataItem.title == title)[0];
    return !!_obj ? _obj : null;
  }
}
export {FieldsStructure}
