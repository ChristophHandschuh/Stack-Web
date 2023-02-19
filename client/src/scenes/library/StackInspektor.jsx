import { Box, Grid, Typography } from "@mui/material";
import { useStoreActions, useStoreState } from "easy-peasy";
import { useNavigate, useParams } from "react-router-dom";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import LinkIcon from '@mui/icons-material/Link';
import { useEffect } from "react";
import { DataGrid, GridColDef, GridToolbarContainer, GridToolbarExport, GridToolbarFilterButton } from '@mui/x-data-grid';

const CustomToolbar = () => {
    return (
        <GridToolbarContainer>
        <GridToolbarFilterButton />
        <GridToolbarExport />
        </GridToolbarContainer>
    );
}

const cleanText = (cards) => {
    for(let i = 0; i < cards.length; i++)
    {
        cards[i].id = i;
        cards[i].front = cards[i].front.replaceAll("<br>", "").replaceAll("<span>", "").replaceAll("</span>", "").replaceAll("<em>", "").replaceAll("</em>", "").replaceAll("<div>", "").replaceAll("</div>", " ");
        cards[i].back = cards[i].back.replaceAll("<br>", "").replaceAll("<span>", "").replaceAll("</span>", "").replaceAll("<em>", "").replaceAll("</em>", "").replaceAll("<div>", "").replaceAll("</div>", " ");
    }
    return cards;
}

const columns: GridColDef[] = [
    {
        field: 'id',
        headerName: 'ID',
        width: 50,
        align: "center",
        headerAlign: "center",
    },
    {
        field: 'front',
        headerName: 'Question',
        width: 150,
        editable: true,
        flex: 1
    },
    {
        field: 'back',
        headerName: 'Answer',
        width: 150,
        editable: true,
        flex: 1
    },
    {
        field: 'type',
        headerName: 'Type',
        width: 110,
    },
    {
        field: 'edit',
        headerName: "Edit",
        width: 50,
        renderCell: (params) => {
            return (
                <Box width="100%" display="flex" alignItems="center" justifyContent="center" style={{ cursor: "pointer" }}>
                    <LinkIcon index={params.row.id} style={{ fill: "#909090" }}/>
                </Box>
            );
         }
    }
  ];

const StackInspektor = () => {
    const { id } = useParams();
    const stacks = useStoreState((state) => state.stacks);
    const cards = useStoreState((state) => state.cards);
    const getCards = useStoreActions(actions => actions.getCards);

    useEffect(() => {
        getCards({ _id: stacks[id-1]._id});
    }, [id]); //[id]

    let navigate = useNavigate(); 
    const routeChange = (route) =>{ 
        let path = `/${route}/${id}`;
        navigate(path);
    }

    const cardEdit = (card_id) =>{ 
        let path = `/create/${id}/${card_id}`;
        navigate(path);
    }

    return (
        <Box>
            <Grid container>
                <Grid item xs={6}>
                    <Box onClick={() => routeChange("learn")} sx={{ boxShadow: 4 }} height="3rem" borderRadius="0.6rem" mx="1.5rem" mt="1.5rem" py="0.01rem" px="2rem" display="flex" alignItems="center" justifyContent="center">
                        <Box display="flex" alignItems="center">
                            <SchoolOutlinedIcon sx={{ color:"#909090"}}/>
                            <Typography variant="h5" fontWeight="625" color="#909090" ml="0.5rem">Practice</Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={6}>
                    <Box onClick={() => routeChange("create")} sx={{ boxShadow: 4 }} height="3rem" borderRadius="0.6rem" mx="1.5rem" mt="1.5rem" py="0.01rem" px="2rem" display="flex" alignItems="center" justifyContent="center">
                        <Box display="flex" alignItems="center">
                            <AddCircleOutlineIcon sx={{ color:"#909090"}}/>
                            <Typography variant="h5" fontWeight="625" color="#909090" ml="0.5rem">Create Flashcards</Typography>
                        </Box>
                    </Box>
                </Grid>
                <Box style={{height: 'calc(100vh - 12rem)'}} width="100%" m="1.5rem">
                    <DataGrid
                        rows={cleanText(cards)}
                        columns={columns}
                        disableSelectionOnClick
                        experimentalFeatures={{ newEditingApi: true }}
                        components={{ Toolbar: CustomToolbar }}
                        onRowClick={(params) => cardEdit(params.id)}
                    />
                </Box>
            </Grid>
        </Box>
    );
}
 
export default StackInspektor;