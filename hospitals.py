import pandas as pd 

class Hospitals():
    def __init__(self, pincode):
        self.pincode = pincode

    def list_hospitals(self):
        df = pd.read_csv("dataset/hospitals.csv", names=['CITY', 'HOSPITAL NAME', 'ADDRESS', 'PINCODE'])
        selected = df.loc[df['PINCODE'] == f'{self.pincode}'].values.tolist()

        return(selected)