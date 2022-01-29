import os

settings = {
    'host': os.environ.get('ACCOUNT_HOST', 'https://bloodbank.documents.azure.com:443/'),
    'master_key': os.environ.get('ACCOUNT_KEY', 'ltRr4lvPImIBK2wvyuubTsFDlrImlthgWoiRakkn5RKREIV4Cwt7KWLXwhHmlQRg1SC5PZzs80ULZMDGVywYRA=='),
    'database_id': os.environ.get('COSMOS_DATABASE', 'Test'),
    'container_id': os.environ.get('COSMOS_CONTAINER', 'hehe'),
}