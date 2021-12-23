import styled from "styled-components";
import {
    ArrowDownwardSharp, ArrowUpward
} from "@material-ui/icons";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`
const FeaturedItem = styled.div`
  flex: 1;
  margin: 0px 20px;
  padding: 30px;
  border-radius: 10px;
  cursor: pointer;
  box-shadow: 2px 7px 13px -4px rgba(0,0,0,0.47);
  -webkit-box-shadow: 2px 7px 13px -4px rgba(0,0,0,0.47);
  -moz-box-shadow: 2px 7px 13px -4px rgba(0,0,0,0.47);
`
const FeaturedTitle = styled.span`
    font-size: 20px;
`

const FeaturedMoneyContainer = styled.div`
    margin: 10px 0px;
    display: flex;
    align-items: center;
`
const FeaturedMoney = styled.span`
    font-size: 30px;
    font-weight: bold;
`
const FeaturedMoneyRate = styled.span`
    display: flex;
    align-items: center;
    margin-left: 10px;
`
const FeaturedSub = styled.span`
    font-size: 15px;
    color: grey;
`
export default function FeaturedInfo() {
    return (
        <Container>
            <FeaturedItem>
                <FeaturedTitle>Revanue</FeaturedTitle>
                <FeaturedMoneyContainer>
                    <FeaturedMoney>$500</FeaturedMoney>
                    <FeaturedMoneyRate>
                        -$1000<ArrowDownwardSharp style={{ fontSize: 14, marginLeft: 5, color: "red" }} />
                    </FeaturedMoneyRate>
                </FeaturedMoneyContainer>
                <FeaturedSub>Compare to last month</FeaturedSub>
            </FeaturedItem>
            <FeaturedItem>
                <FeaturedTitle>Sales</FeaturedTitle>
                <FeaturedMoneyContainer>
                    <FeaturedMoney>$500</FeaturedMoney>
                    <FeaturedMoneyRate>
                        -$1000<ArrowDownwardSharp style={{ fontSize: 14, marginLeft: 5, color: "red" }} />
                    </FeaturedMoneyRate>
                </FeaturedMoneyContainer>
                <FeaturedSub>Compare to last month</FeaturedSub>
            </FeaturedItem>
            <FeaturedItem>
                <FeaturedTitle>Cost</FeaturedTitle>
                <FeaturedMoneyContainer>
                    <FeaturedMoney>$500</FeaturedMoney>
                    <FeaturedMoneyRate>
                        +$1000<ArrowUpward style={{ fontSize: 14, marginLeft: 5, color: "green" }} />
                    </FeaturedMoneyRate>
                </FeaturedMoneyContainer>
                <FeaturedSub>Compare to last month</FeaturedSub>
            </FeaturedItem>
        </Container>
    )
}
