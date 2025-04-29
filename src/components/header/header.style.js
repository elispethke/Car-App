import { StyleSheet, Dimensions } from "react-native";
const { width: windowWidth } = Dimensions.get("window");

const styles = StyleSheet.create({

   scrollContainer: {
    paddingBottom: 20,
    
  },
  card: {
    flex: 1,
    marginVertical: 1,
    marginHorizontal: 0,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
  },
  normalDot: {
    height: 8,
    width: 8,
    borderRadius: 4,
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    marginHorizontal: 5,
    zIndex: 1,
  },
  indicatorContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    bottom: 50,
    zIndex: 2,
  },
  topIconContainer: {
    position: "absolute",
    top: 50,
    left: 10,
    right: 10,
    flexDirection: "row",
    justifyContent: "flex-end",
    zIndex: 1,
  },
  iconButton: {
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    borderRadius: 15,
    padding: 10,
    margin: 5,
  },
  iconBack: {
    position: "absolute",
    top: 50,
    left: 20,
    zIndex: 1,
  },
  back: {
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    borderRadius: 25,
    padding: 10,
  },
  infoContainer: {
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: -35,
    marginButton: 30,
    padding: 15,
    paddingLeft: 50,
    paddingRight: 50,
    marginLeft: 1,
    marginRight: 1,
    alignItems: "center",
    alignItems: "center",
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 5,
  },

  subtitle: {
    fontSize: 16,
    color: "gray",
    marginBottom: 6,
  },
  infoBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 4,
  },
  infoBoxItem: {
    backgroundColor: "#E0E0E0",
    flex: 1,
    marginHorizontal: 5,
    alignItems: "center",
    borderRadius: 20,
    paddingVertical: 2,
    paddingHorizontal: 3,
  },

  separator: {
    borderBottomWidth: 1,
    borderBlockColor: "#E8E8E8",
    marginTop: -5,
    marginHorizontal: 30,
  },

  carTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginTop: 20,
    textAlign: "left",
    padding: 8,
    marginHorizontal: 20,
  },
  featuresContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    marginTop: 3,
    alignItems: "flex-start",
    marginBottom: 30,
  },
  column: {
    width: "50%",
    gap: 6,
  },
  detailBox: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    padding: 6,
  },
  detailText: {
    fontSize: 14,
    fontWeight: "500",
  },
  priceContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginTop: 6,
    alignItems: "flex-start",
    marginBottom: 30,
  },
  daysColumn: {
    width: "48%",
    gap: 6,
  },
  daysBox: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    padding: 6,
  },
  daysText: {
    fontSize: 13,
  },
  priceColumn: {
    width: "48%",  
    gap: 6,
  },
  priceBox: {
    flexDirection: "row",
    justifyContent: "flex-end",
    padding: 6,
  },
  priceText: {
    fontSize: 13,
    fontWeight: "600",
    color: "#333",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: 10,
    marginTop: 10,
  },
  buttonBox: {
    flexDirection: "row",
    alignItems: "flex-end",
  },
  dailyPice: {
    fontSize: 16,
    color: "#D3D3D6",
    marginLeft: 5,
    marginTop: -4,
  },
  scrollViewContainer: {
    flex: 1,
    paddingTop: 0, 
  },
  headerContainer: {
    position: "absolute", 
    top: 0,
    width: "100%", 
    zIndex: 1, 
  },
  
  sectionContainer:{
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginBottom: 30, 
    padding: 15,
  },
  sectionText:{
   fontSize:16,
   fontWeight: 'bold',
   marginBottom: 20,
  },
   ownerCircle:{
    backgroundColor: "#FF8C00",
    width: 45,
    height: 45,
    borderRadius: 40,
    color: 'white',
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'center',
    textAlignVertical: 'center',
    alignSelf: 'flex-start',
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 3 },
    shadowOpacity: 0.35,
    shadowRadius: 7,
    elevation: 5,
   },
   ownerLetter: {
   color: 'white',
   fontSize: 18,
   fontWeight: 'light',
   textAlign: 'center',
   top: 11,
   
},
sectionContainer2:{
  marginLeft: 40,
  marginTop: -55, 
  padding: 15,
},
sectionTitle:{
 fontSize: 14,
 fontWeight: 'bold',
},
sectionSubTitle:{
 fontSize: 14,
  color: 'gray',
},
sectionView:{
  margin: -7,
  fontStyle: 'normal',
  fontWeight: 'bold',
  
},
sectionSubView:{
 fontSize: 14,
  color: 'gray',
},
   buttonStyle: {
    backgroundColor: "#FF8C00",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  sectionCancel:{
    marginLeft: 10,
    marginTop: -40, 
    padding: 15,
    marginTop: 5,
    
  },
  cancelTitle:{
  fontSize: 14,
  fontWeight: 'bold',
   marginBottom: 10,
  },
  cancelText:{
  fontSize: 13,
  lineHeight: 17,
  color: '#333',
  textAlign: 'auto',
  
  },
   buttonText: {
    color: "#ffff",
    fontWeight: "500",
  },
  finalPrice: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
  },
    footer: {
    position: "absolute",
    bottom: 0,
    marginTop: 20,
    left: 0,
    right: 0,
    padding: 16,
    paddingHorizontal: 15,
    paddingVertical: 50,
    backgroundColor: "white",
    flexDirection: "row",  
    justifyContent: "space-between",  
    alignItems: "center",  
  },
});

export default styles;
