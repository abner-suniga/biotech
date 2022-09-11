from Bio import Entrez

Entrez.email = 'ra93996@uem.br'
Entrez.api_key = 'fbe52eef7961119f5f2d88a2cb6a9c2a5308'

# Download gene records linked to a set of proteins corresponding to a list
# of GI numbers.

# linknames: https://eutils.ncbi.nlm.nih.gov/entrez/query/static/entrezlinks.html#gene

handle = Entrez.elink(
    dbfrom='gene',
    db='protein',
    linkname='gene_protein',
    id='7157',
    cmd='neighbor'
)
record = Entrez.read(handle)
print(record)

p_id = record[0]["LinkSetDb"][0]["Link"][0]["Id"]
handle = Entrez.esummary(
    db='protein',
    id=p_id
)
record = Entrez.read(handle)
print(record)
